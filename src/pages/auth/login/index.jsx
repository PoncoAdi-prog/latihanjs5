import React from 'react'
import AppLayout from '../../../components/layouts/app.layout';
import { Form, Input, Checkbox, Button} from 'antd'
import {supabase } from '../../../configs/supabase'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate ()
    const onFinish = async (value) =>{
        const {data, error} = await supabase.auth.signInWithPassword({email: value.email })
        console.log(value)
        
        if(data){
            navigate('/auth/login')
        }
   
    }


    return (
        (
            <AppLayout>
            <h1>Login Page </h1>
            <div style={{backgroundColor:'white', padding:'5rem', display:'flex', flexDirection}} >
                <From
                    name="basic"
                    labelCol={{ span: 8 }}
                    WrapperCol={{ span: 16}}
                    style={{maxWidth: 600,}}
                    initialValue={{remeber: true }}
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

                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'please inpu'}]}
                    >
                        <Input.Password />
                    </From.Item>

                    <From.Item name="remember" valuePropName="checkbox">
                        <Checkbox>Remember me</Checkbox>
                    </From.Item>

                    <From.Item WrapperCol={{ offset: 8, span:16}}>
                        <Button type="primary" htmlTyoe="submit">
                           Submit 
                        </Button>
                    </From.Item>
                </From>
             </div>
            </AppLayout>
        )
    )

}

export default LoginPage