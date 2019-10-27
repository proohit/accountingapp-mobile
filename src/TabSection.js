import React, { Component } from 'react'
import { Tabs, Tab, Button } from 'native-base'
import RecordList from './RecordList'
import {selectAllRecords, deleteAllRecords, openFile, overrideDb} from '../database/Database'


export default class TabSection extends Component {
    render() {


        return (

            <Tabs>
                <Tab heading='Tab1'>
                    <RecordList>
                    </RecordList>
                </Tab>
                <Tab heading='Tab2'>
                    <Button onPress={async () => {
                        //insert file operations here
                        // await openFile();
                        // await deleteAllRecords()
                        // await selectAllRecords()
                        // await overrideDb()
                    }}></Button>
                </Tab>
            </Tabs>
        )
    }
}

