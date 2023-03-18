import React from 'react'
import AppLayout from '../components/layouts/app.layout';
import {useQuestionsAmount} from '../mudules/soal/hooks';
import {List} from 'antd'

const ListSoal = (props) => {
    return(
        <List
            header={<h1 style={{color:'#fff'}}>Daftar Soal</h1>}
            dataSource={props.results}
            renderItem={(item)=>(
                <List.Item style={{color:'#fff'}}>{item.question}</List.Item>
            )}
        />
    )   
}


const MainPage = () => {
    const { data, isLoading, error} = useQuestionsAmount({amount: 10})

    return (
        <AppLayout>
            {isLoading && <h1>Loading</h1> }
            {
                data && !isLoading && <ListSoal results={data.results} />
            }
        </AppLayout>
    )
}

export default MainPage