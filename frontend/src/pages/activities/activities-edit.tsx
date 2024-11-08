import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/activities/activitiesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditActivitiesPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    description: '',

    type: '',

    participants: [],
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { activities } = useAppSelector((state) => state.activities);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof activities === 'object') {
      setInitialValues(activities);
    }
  }, [activities]);

  useEffect(() => {
    if (typeof activities === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = activities[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [activities]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/activities/activities-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit activities')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit activities'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='ActivityName'>
                <Field name='name' placeholder='ActivityName' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Type' labelFor='type'>
                <Field name='type' id='type' component='select'>
                  <option value='study'>study</option>

                  <option value='break'>break</option>

                  <option value='offline'>offline</option>
                </Field>
              </FormField>

              <FormField label='Participants' labelFor='participants'>
                <Field
                  name='participants'
                  id='participants'
                  component={SelectFieldMany}
                  options={initialValues.participants}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/activities/activities-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditActivitiesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ACTIVITIES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditActivitiesPage;
