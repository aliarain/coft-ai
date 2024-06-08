import React, {Children, useState} from "react";

type InitalValueProps={
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitalValues: InitalValueProps={
    currentStep: 0,
    setCurrentStep: ()=> undefined
}

const authContext = React.createContext<InitalValueProps>(InitalValues)

const {Provider} = authContext

export const AuthContextProvider =({children}: {children: React.ReactNode})=>{
    const [currentStep, setCurrentStep] = useState<number>(InitalValues.currentStep)
    const values = {currentStep, setCurrentStep}
    return(
        <Provider value={values}>
            {children}
        </Provider>
    )
}

export const useAuthContextHook = () => {
    
   const state =  React.useContext(authContext)
    
    return state
}