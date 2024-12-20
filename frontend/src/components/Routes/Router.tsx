// @ts-nocheck 

import {  Routes, Route } from 'react-router-dom';
import Defination from '../UnitOfAccounts/Defination';
import Parameters from '../UnitOfAccounts/Parameters';
import NewSession from '../NewSession/NewSession';
import SessionHistory from '../SessionHistory/SessionHistory';
import CalculationHistory from '../CalculationHistory/CalculationHistory';
import FinancialStatements from '../FinancialStatements/FinancialStatements';
import Auth from '../Auth/Auth';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/unit-of-accounts/defination" element={<Defination />} />
            <Route path="/unit-of-accounts/parameters" element={<Parameters />} />
            <Route path='/calculations/new-session' element={<NewSession/>} />
            <Route path='/calculations/session-history' element={<SessionHistory/>} />
            <Route path='/calculations/calculation-history' element={<CalculationHistory/>} />
            <Route path='/reporting/financial-statements' element={<FinancialStatements/>} />
            <Route path='/auth' element={<Auth/>} />
        </Routes>
    )
}

export default AppRouter