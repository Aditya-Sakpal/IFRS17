// @ts-nocheck 

import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DownloadIcon from '@mui/icons-material/Download';
import Modal from 'react-modal'; // You can use this or any modal package you like
import './index.css'

const Parameters: React.FC = () => {

    const actions = [
        { icon: <AddCircleOutlineIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'New' },
        { icon: <EditIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Edit' },
        { icon: <CloseIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Delete' },
        { icon: <RefreshIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Refresh' },
        { icon: <TheaterComedyIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Show/Hide' },
        { icon: <DownloadIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Export' },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        configurationName: '',
        unitOfAccountName: '',
        calculationFrequency: 'Yearly',
        lockedInRateType: 'Curve',
        discountedCoverageUnitForCSM: false,
        coverageUnitBasisForRA: 'Straight Line',
        curveForCoverageUnitOfRA: 'Current Rate',
        discountedCoverageUnitForRecoveryOfAcquisitionCashflow: false,
        initialRecognitionDate: '31.12.2021',
        acquisitionCostDeferral: '',
        lcCalculationType: '',
        dataBasis: 'Unit of Account',
        calculationBasis: '',
        discountCurve: '',
        initialRecognitionDateType: 'Predetermined',
        coverageUnitBasisForCSM: 'Straight Line',
        curveForCoverageUnitOfCSM: 'Current Rate',
        discountedCoverageUnitForRA: false,
        coverageUnitBasisForRecoveryOfAcquisitionCashflow: 'Straight Line',
        curveForCoverageUnitOfRecoveryOfAcquisitionCashflow: 'Current Rate',
        significantFinancingComponent: false,
        revenueRecognitionBase: '',
        cashflowGenerationType: 'Cashflow',
        contractBoundaryEndDate: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        closeModal(); // Close modal after submission
    };

    const columns = [
        'Configuration Name',
        'Calculation Basis',
        'Unit of Account Name',
        'Discount Curve',
        'Calculation Frequency',
        'Initial Recognition Date Type'
    ];

    const rows = [
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL8003A2021MNNP09999',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        },
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL8003A2015LPNOR99991',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        },
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL8003C2018LNNOR99991',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        },
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL0211A2021LNMOR99991',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        },
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL0211C2021LNMOR21901',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        },
        {
            configurationName: 'Transition_Reporting',
            calculationBasis: 'PolicyGroup',
            unitOfAccountName: 'RL2190C2021LNMOR00011',
            discountCurve: 'Predetermined',
            calculationFrequency: 'Yearly',
            initialRecognitionDateType: 'Predetermined'
        }
    ];

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Unit of Account Parameters"
                className="absolute w-[80vw] h-[95vh] rounded left-[10%] top-[2%] bg-[#434344] shadow-2xl  border-0 modal-animation"
                overlayClassName="modal-overlay"
            >
                <div className='w-[100%] h-[10%] text-white flex items-center pl-[2%] border-0' >
                    <p className="text-2xl">Unit of Account Parameters</p>
                </div>
                <form onSubmit={handleSubmit} className='w-[100%] h-[85%] flex border-0 justify-start overflow-y-scroll  '  >
                    <div className='w-[50%] h-[100%] flex flex-col justify-center items-center overflow-y-scroll  ' >
                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Configuration Name :</label>
                            <select name="portfolioName" value={formData.configurationName} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="LH6-NewRe_EUR">LH6-NewRe_EUR</option>
                                <option value="LH6-NewRe_US">LH6-NewRe_US</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Unit of Account Name :</label>
                            <select name="cohortName" value={formData.unitOfAccountName} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="CRM_2027">CRM_2027</option>
                                <option value="CRM_2028">CRM_2028</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Calculation Frequency :</label>
                            <select name="profitBucket" value={formData.calculationFrequency} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Resilient">Resilient</option>
                                <option value="Stable">Stable</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Locked In Rate Type:</label>
                            <select name="concentration" value={formData.lockedInRateType} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Region</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Discounted Coverage Unit for CSM :</label>
                            <input
                                type="checkbox"
                                name="discountedCoverageUnitForCSM"
                                checked={formData.discountedCoverageUnitForCSM}
                                onChange={handleInputChange}
                                className="border ml-[6%]"
                            />
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Coverage Unit Basis For RA :</label>
                            <select name="concentration" value={formData.coverageUnitBasisForRA} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Region</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Discounted Coverage Unit for Recovery of Aquisition Cashflow ?</label>
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.discountedCoverageUnitForRecoveryOfAcquisitionCashflow}
                                onChange={handleInputChange}
                                className="border ml-[6%]"
                            />
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Initial Recognition Date :</label>
                            <select name="concentration" value={formData.initialRecognitionDate} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Region</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Acquisition Cost Deferral :</label>
                            <select name="concentration" value={formData.acquisitionCostDeferral} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>


                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">I C Calculation Type :</label>
                            <select name="concentration" value={formData.acquisitionCostDeferral} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        {/* <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Data Basis :</label>
                            <select name="concentration" value={formData.unitOfAccountName} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Unit of Account">Unit of Account</option>
                                <option value="Unit of Account">Unit of Account</option>
                            </select>
                        </div> */}



                        {/* <div className="flex justify-end pr-[2%]">
                            <button type="submit" className="bg-green-500 text-white p-2 rounded mr-2">Save</button>
                            <button onClick={closeModal} type="button" className="bg-red-500 text-white p-2 rounded">Cancel</button>
                        </div> */}
                    </div>
                    <div className='w-[50%] h-[100%] flex flex-col justify-center items-center overflow-y-hidden  ' >
                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Calculation Basis :</label>
                            <select name="portfolioName" value={formData.calculationBasis} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="LH6-NewRe_EUR">Policy Group</option>
                                <option value="LH6-NewRe_US">LH6-NewRe_US</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Discount Curve :</label>
                            <select name="cohortName" value={formData.discountCurve} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="CRM_2027">Predetermined</option>
                                <option value="CRM_2028">CRM_2028</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Intial Recognition Data Type :</label>
                            <select name="profitBucket" value={formData.initialRecognitionDateType} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Resilient">Predetermined</option>
                                <option value="Stable">Stable</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Coverage Unit Basis for CSM :</label>
                            <select name="concentration" value={formData.coverageUnitBasisForCSM} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Current Rate</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Discounted Coverage Unit for RA :</label>
                            <input
                                type="checkbox"
                                name="discountedCoverageUnitForRA"
                                checked={formData.discountedCoverageUnitForRA}
                                onChange={handleInputChange}
                                className="border ml-[6%]"
                            />
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Coverage Unit Basis For Recovery of Aquisition Cashflow :</label>
                            <select name="concentration" value={formData.coverageUnitBasisForRecoveryOfAcquisitionCashflow} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Straight Line</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Curve for Coverage Unit of Recovery of Acquisition Cashflow ?:</label>
                            <select name="concentration" value={formData.curveForCoverageUnitOfRecoveryOfAcquisitionCashflow} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Region">Current Rate</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Significant Financing Component</label>
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.significantFinancingComponent}
                                onChange={handleInputChange}
                                className="border ml-[6%]"
                            />
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Revenue Recognition Base:</label>
                            <select name="concentration" value={formData.revenueRecognitionBase} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="">""</option>
                                <option value="Global">Global</option>
                            </select>
                        </div>

                        <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Cashflow Generation Type :</label>
                            <select name="concentration" value={formData.cashflowGenerationType} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="">CashFlow</option>
                                <option value=""></option>
                            </select>
                        </div>


                        {/* <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Contract Boundary End Date:</label>
                            <select name="concentration" value={formData.contractBoundaryEndDate} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div> */}

                        {/* <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                            <label className="w-[40%] text-xl text-[#a7a6a7]  ">Data Basis :</label>
                            <select name="concentration" value={formData.unitOfAccountName} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                                <option value="Unit of Account">Unit of Account</option>
                                <option value="Unit of Account">Unit of Account</option>
                            </select>
                        </div>

 */}

                        {/* <div className="flex justify-end pr-[2%]">
                            <button type="submit" className="bg-green-500 text-white p-2 rounded mr-2">Save</button>
                            <button onClick={closeModal} type="button" className="bg-red-500 text-white p-2 rounded">Cancel</button>
                        </div> */}
                    </div>
                </form>
            </Modal>
            <div className=' w-[75vw] h-[90vh] bg-[#eaf1f4] ' >
                <div className='w-[100%] h-[20%] ' >
                    <div className='w-[100%] h-[50%] ' >
                        <p className='text-4xl ml-[2%] mt-[1%] ' >Units of Accounts Parameters</p>
                    </div>
                    <div className='w-[100%] h-[50%]  flex items-center pl-[2%] ' >
                        {actions.map((action, index) => (
                            <div
                                key={index}
                                className={`w-[fit-content] px-[1%] h-[80%] bg-[#4f4e4e] text-white rounded flex items-center mx-[0.5%] pl-[1%] cursor-pointer ${action.name == 'Show/Hide' ? 'pr-[2%]' : ''} `}
                                onClick={action.name == 'Edit' ? openModal : () => { }}
                            >
                                {action.icon}
                                <p className="text-2xl font-semibold pl-[2%]">
                                    {action.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-[100%] h-[80%]  flex justify-center items-center ' >
                    <table className='w-[95%] h-[90%]  bg-[#a9acac]' >
                        <thead className='h-[20%] w-[100%]' >
                            <tr>
                                {columns.map((column, index) => (
                                    <th key={index} className="border border-gray-300  px-4 py-2 ">
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='cursor-pointer' >
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select name="portfolioName" value={formData.portfolioName} className="border border-none w-[100%] h-[80%]  ">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </td>
                            </tr>
                            {rows.map((row, index) => (
                                <tr key={index} className='cursor-pointer hover:bg-[#4f4e4e] hover:text-white ' >
                                    <td className="border border-gray-300 px-4 py-2">{row.configurationName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.calculationBasis}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.unitOfAccountName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.discountCurve}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.calculationFrequency}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.initialRecognitionDateType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Parameters