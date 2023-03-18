import React from 'react'
import AppLayout from '../../../components/layouts/app.layout';
import {supabase } from '../../../configs/supabase'
import { Form, Input, Checkbox, Button} from 'antd'
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const navigate = useNavigate ()


    const onFinish = async (value) =>{
        const {data, error} = await supabase.auth.signUp({
            email:value?.email,
            password:value.password,
        })

        if(data){
            navigate('/auth/login')
        }
   
   
    }


    return (
        <AppLayout>
        <h1> Register Page {} </h1>
        <div style={{backgroundColor:'white', padding:'5rem', display:'flex', flexDirection}} />
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    WrapperCol={{ span: 16 }}
                    style={{maxWidth: 600, }}
                    initialValues={{remember: true }}
                    onFinish={onFinish}

                    autoComplete="off"
                >
                    <From.Item
                        Label="Email"
                        name="email"
                        rules={[{ required: true, message: 'please input'}]}
                    >
                        <Input />
                    </From.Item>

                    <From.Item

                    >
                        <Input/>

                    </From.Item>

                    label="Password"
                </Form>

            
        </AppLayout>
    )




}