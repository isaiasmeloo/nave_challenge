import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'
import DatePickerComponent from '../../components/DatePicker'
import ModalComponent from '../../components/Modal';

import { Container, Content, Title } from './styles'
import api from '../../services/api'

export default function Naver({ route }) {
  const [name, setName] = useState('')
  const [job_role, setJobRole] = useState('')
  const [birthdate, setBirthdate] = useState(null)
  const [admissionDate, setAdmissionDate] = useState(null)
  const [project, setProject] = useState('')
  const [url, setUrl] = useState('')

  const [titleModal, setTitleModal] = useState('')
  const [messageModal, setMessageModal] = useState('')

  const [date, setDate] = useState(new Date());
  const [dateCompany, setDateCompany] = useState(new Date());
  const [showDatePickerBirthdate, setShowDatePickerBirthdate] = useState(false);
  const [showDatePickerAdmissionDate, setShowDatePickerAdmissionDate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation()
  const id = route.params?.id

  useEffect(() => {
    if (id) {
      getNaver(id)
    }

  }, [])

  async function getNaver(id) {
    try {
      const response = await api.get(`navers/${id}`)

      if (response.status === 200) {
        setName(response.data.name)
        setJobRole(response.data.job_role)
        setBirthdate(parseISO(response.data.birthdate))
        setAdmissionDate(parseISO(response.data.admission_date))
        setDate(parseISO(response.data.birthdate))
        setDateCompany(parseISO(response.data.admission_date))
        setProject(response.data.project)
        setUrl(response.data.url)
      }
    } catch (error) {
      console.log(error)
    }
  }


  function validateSubmit() {
    if (name === '' || job_role === '' || project === '') {
      return
    }
    handleSubmit()
  }

  async function handleSubmit() {
    const submit = {
      name,
      job_role,
      admission_date: format(admissionDate, 'dd/MM/yyyy'),
      birthdate: format(birthdate, 'dd/MM/yyyy'),
      project,
      url
    }

    console.log(submit)
    try {
      let response

      id
        ? response = await api.put(`/navers/${id}`, submit)
        : response = await api.post('/navers', submit)

      if (response.status === 200) {
        setModalVisible(true)
        setTitleModal(`Naver ${id ? 'editado' : 'adicionado'}`)
        setMessageModal(`Naver ${id ? 'editado' : 'adicionado'} com sucesso!`)
      }
    } catch (error) {
      setModalVisible(true)
      setTitleModal("Erro")
      setMessageModal("Erro ao adicionar naver!")
      console.log('error submit ', error.response.data)
    }
  }

  function onFocus() {
    setShowDatePickerAdmissionDate(false)
    setShowDatePickerBirthdate(false)
  }

  function onDismiss() {
    setModalVisible(false)
    navigation.popToTop()
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={50}
      >
        <Container>
          <Content showsVerticalScrollIndicator={false}>
            <ModalComponent
              modalVisible={modalVisible}
              onDismiss={onDismiss}
              title={titleModal}
              message={messageModal}
            />
            <Title>{id ? 'Editar' : 'Adicionar'} naver</Title>

            <InputComponent
              label="Nome"
              value={name}
              onChangeText={text => setName(text)}
              autoCorrect={false}
            />

            <InputComponent
              label="Cargo"
              value={job_role}
              onChangeText={text => setJobRole(text)}
              autoCorrect={false}
              onFocus={onFocus}
            />

            <DatePickerComponent
              title="Data de nascimento"
              date={date}
              showDatePicker={showDatePickerBirthdate}
              onPress={() => setShowDatePickerBirthdate(!showDatePickerBirthdate)}
              onDateChange={(selectedDate) => {
                setDate(selectedDate);
                setBirthdate(selectedDate);
              }}
              showValue={!showDatePickerBirthdate && birthdate}
            />

            <DatePickerComponent
              title="Tempo de empresa"
              date={dateCompany}
              showDatePicker={showDatePickerAdmissionDate}
              onPress={() => setShowDatePickerAdmissionDate(!showDatePickerAdmissionDate)}
              onDateChange={(selectedDate) => {
                setDateCompany(selectedDate);
                setAdmissionDate(selectedDate);
              }}
              showValue={!showDatePickerAdmissionDate && admissionDate}
            />

            <InputComponent
              label="Projeto que participou"
              value={project}
              onChangeText={text => setProject(text)}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={onFocus}
            />

            <InputComponent
              label="URL da foto do naver"
              value={url}
              onChangeText={text => setUrl(text)}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={onFocus}
            />

            <ButtonComponent
              text={id ? "Editar" : "Salvar"}
              onPress={validateSubmit}
              style={{ marginVertical: 40 }}
            />
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
