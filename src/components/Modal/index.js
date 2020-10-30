import React from 'react';
import { View, Modal, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ButtonComponent from '../Button'

import { ModalContainer, ModalContent, ModalHeader, Title, Message } from './styles';

const ModalComponent = ({ title, message, modalVisible, onDismiss, onDelete, showOptions }) => {
  const theme = useColorScheme()

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <Title>{title}</Title>
            <TouchableOpacity onPress={onDismiss}>
              <Icon name="x" size={24} color={theme === "dark" ? "#FFFFFF" : "#212121"} />
            </TouchableOpacity>
          </ModalHeader>
          <Message>{message}</Message>
          {showOptions && (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <ButtonComponent
                style={{ marginRight: 6 }}
                onPress={onDismiss}
                text="Cancelar"
                white
              />

              <ButtonComponent
                onPress={onDelete}
                text="Excluir"
              />
            </View>
          )}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default ModalComponent;
