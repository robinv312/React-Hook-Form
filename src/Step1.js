import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import MainContainer from './components/MainContainer'
import Form from './components/Form'
import Input from './components/Input'
import PrimaryButton from './components/PrimaryButton'
import { Typography } from '@material-ui/core';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'
import {useData} from './DataContext'

const schema = yup.object().shape({
    firstName:yup.string().matches(/^([^0-9]*)$/,"First field should not contain numbers").required("first name is a required field"),
    lastName:yup.string().matches(/^([^0-9]*)$/,"last field should not contain numbers").required("last name is a required field")
})
function Step1() {

    const {setValues,data} = useData()
    const { register, handleSubmit, errors } = useForm({
        defaultValues:{firstName:data.firstName,lastName:data.lastName},
        mode:"onBlur",
        resolver:yupResolver(schema)
    })
    const history = useHistory()
    const onSubmit = (data) => {
        history.push("/step2")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">🦄Step 2</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input  type="text" ref={register} name="firstName" placeholder="Fist Name" label="First Name"
                error={!!errors.firstName} helperText={errors?.firstName?.message}
                
                />
                <Input ref={register} name="lastName" type="text" placeholder="Last Name"   label="Last Name"
                error={!!errors.lastName} helperText={errors?.lastName?.message}/>
                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step1
