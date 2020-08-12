import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import EmergencyContact from '../components/EmergencyContact'

function CallATherapist({ state }) {
    
    function renderContacts() {
        const filteredContacts = state.emergency_contacts.filter(ec => ec.professional)
        return filteredContacts.map(ec => <EmergencyContact key={ec.id} emergencyContact={ec} />)
    }

    return (
        <View>
            {renderContacts()}
        </View>
    )
}

export default connect((state)=>({state}))(CallATherapist)