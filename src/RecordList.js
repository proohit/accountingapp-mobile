import { Text } from 'react-native'
import React, { Component } from 'react'
import {
    Content,
    Separator,
    List,
    ListItem,
} from 'native-base'
import { deleteAllRecords, getAllMonths, openFile, selectAllRecords } from '../database/Database'

export default class RecordList extends Component {
    state = {
        items: [
            {
                id: '1',
                description: 'firstEntry'
            },
            {
                id: '2',
                description: 'secondyEntry'
            }
        ]
    }


    render() {
        let entryList = this.state.items.map(item => (
            <ListItem key={item.id}>
                <Text>{item.description}</Text>
            </ListItem>))

        return (
            <Content >
                <Separator bordered>
                    <Text>Month1</Text>
                </Separator>
                {entryList}
            </Content >
        )
    }
}