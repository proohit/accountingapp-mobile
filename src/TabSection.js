import React, { Component } from 'react'
import { Tabs, Tab } from 'native-base'
import RecordList from './RecordList'
export default class TabSection extends Component {
    render() {
        return (

            <Tabs>
                <Tab heading='Tab1'>
                    <RecordList>
                    </RecordList>
                </Tab>
                <Tab heading='Tab2'>

                </Tab>
            </Tabs>
        )
    }
}