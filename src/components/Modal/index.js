import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ButtonComponent from '../Button'
import { ModalContainer, ModalContent } from './styles';

const ModalComponent = ({ modalVisible, title, message, onDismiss, onDelete, showOptions }) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <ModalContainer>
        <ModalContent>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontFamily: 'Montserrat-SemiBold' }}>{title}</Text>
            <TouchableOpacity onPress={onDismiss}>
              <Icon name="x" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 20 }}>{message}</Text>
          {showOptions && (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <ButtonComponent
                style={{ backgroundColor: 'transparent', borderWidth: 1 }}
                onPress={onDismiss}
                text="Cancelar"
                textColor="#212121"
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
