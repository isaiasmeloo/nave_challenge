import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, Modal, Text } from 'react-native';
// import DatePicker from 'react-native-date-picker'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'

import { Container, Content, Title } from './styles'
import api from '../../services/api'
import ModalComponent from '../../components/Modal';
import { useNavigation } from '@react-navigation/native';

export default function Naver() {
  const [name, setName] = useState('')
  const [job_role, setJobRole] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [company_time, setCompanyTime] = useState('')
  const [project, setProject] = useState('')
  const [url, setUrl] = useState('')

  const [titleModal, setTitleModal] = useState('')
  const [messageModal, setMessageModal] = useState('')

  // const [date, setDate] = useState(new Date())
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

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
      admission_date: '28/12/2015',
      birthdate: '28/12/1996',
      project,
      url
    }

    console.log(submit)
    try {
      const response = await api.post('/navers', submit)

      if (response.status === 200) {
        setModalVisible(true)
        setTitleModal("Naver adicionado")
        setMessageModal("Naver adicionado com sucesso!")

        navigation.goBack()
      }
    } catch (error) {
      setModalVisible(true)
      setTitleModal("Erro")
      setMessageModal("Erro ao adicionar naver!")
      console.log('error submit ', error.response.data)
    }
  }

  function onDismiss() {
    setModalVisible(false)

  }

  return (
    <Container>
      <Content>
        <ModalComponent
          modalVisible={modalVisible}
          onDismiss={onDismiss}
          title={titleModal}
          message={messageModal}
        />
        <Title>Adicionar naver</Title>

        <InputComponent
          label="Nome"
          onChangeText={text => setName(text)}
          autoCorrect={false}
        />

        <InputComponent
          label="Cargo"
          onChangeText={text => setJobRole(text)}
          autoCorrect={false}
        />
        {/* <DatePicker
          date={date}
          onDateChange={setDate}
        /> */}
        <InputComponent
          label="Data de nascimento"
          onChangeText={text => setBirthdate(text)}
          autoCorrect={false}
        />
        <InputComponent
          label="Tempo de empresa"
          onChangeText={text => setCompanyTime(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <InputComponent
          label="Projeto que participou"
          onChangeText={text => setProject(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <InputComponent
          label="URL da foto do naver"
          onChangeText={text => setUrl(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Content>

      <ButtonComponent text={"Salvar"} onPress={validateSubmit} />
    </Container>
  );
}
