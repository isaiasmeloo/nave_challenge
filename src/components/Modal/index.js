import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { ModalContainer, ModalContent } from './styles';

const ModalComponent = ({ modalVisible, title, message, onDismiss }) => {

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
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 20 }}>{message}</Text>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default ModalComponent;
