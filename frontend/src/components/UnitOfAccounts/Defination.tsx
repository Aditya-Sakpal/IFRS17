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

const Defination: React.FC = () => {

    const actions = [
        { icon: <AddCircleOutlineIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'New' },
        { icon: <EditIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Edit' },
        { icon: <CloseIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Delete' },
        { icon: <RefreshIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Refresh' },
        { icon: <TheaterComedyIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Show/Hide' },
        { icon: <DownloadIcon className='!w-[30%] !h-[60%] text-white ' />, name: 'Export' },
    ];

    const columns = ['Entity Name', 'Unit of Account', 'Portfolio Name', 'Cohort Name', 'Profit Bucket', 'Concentrate',
        'Unit of Account 1', 'Unit of Account 2', 'Is Active?', 'Created Unit', 'Created Date', 'Modified Unit', 'Modified Date']

    const rows = [
        {
            entityName: 'Scenario Test',
            unitOfAccount: 83213,
            portfolioName: 'LH6-NewRe_US',
            cohortName: 'CRM_2027',
            profitBucket: 'Resilient',
            concentration: 'Region',
            unitOfAccount_1: 'RL8003A20',
            unitOfAccount_2: 'RL8003A20',
            isActive: true,
            createdUser: 'Apoorv Charupa',
            createdDate: '21.08.2023',
            modifiedUser: '',
            modifiedDate: '',
        },
        {
            entityName: 'Scenario Test',
            unitOfAccount: 83212,
            portfolioName: 'LH6-NewRe_EU',
            cohortName: 'CRM_2027',
            profitBucket: 'Resilient',
            concentration: 'Region',
            unitOfAccount_1: 'RL8003A20',
            unitOfAccount_2: 'RL8003A20',
            isActive: true,
            createdUser: 'Apoorv Charupa',
            createdDate: '21.08.2023',
            modifiedUser: '',
            modifiedDate: '',
        },
        {
            entityName: 'Scenario Test',
            unitOfAccount: 83212,
            portfolioName: 'LH6-NewRe_EU',
            cohortName: 'CRM_2027',
            profitBucket: 'Resilient',
            concentration: 'Region',
            unitOfAccount_1: 'RL8003A20',
            unitOfAccount_2: 'RL8003A20',
            isActive: true,
            createdUser: 'Apoorv Charupa',
            createdDate: '21.08.2023',
            modifiedUser: '',
            modifiedDate: '',
        },
        {
            entityName: 'Scenario Test',
            unitOfAccount: 83212,
            portfolioName: 'LH6-NewRe_EU',
            cohortName: 'CRM_2027',
            profitBucket: 'Resilient',
            concentration: 'Region',
            unitOfAccount_1: 'RL8003A20',
            unitOfAccount_2: 'RL8003A20',
            isActive: true,
            createdUser: 'Apoorv Charupa',
            createdDate: '21.08.2023',
            modifiedUser: '',
            modifiedDate: '',
        },
        {
            entityName: 'Scenario Test',
            unitOfAccount: 83212,
            portfolioName: 'LH6-NewRe_EU',
            cohortName: 'CRM_2027',
            profitBucket: 'Resilient',
            concentration: 'Region',
            unitOfAccount_1: 'RL8003A20',
            unitOfAccount_2: 'RL8003A20',
            isActive: true,
            createdUser: 'Apoorv Charupa',
            createdDate: '21.08.2023',
            modifiedUser: '',
            modifiedDate: '',
        },

    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        portfolioName: 'LH6-NewRe_EUR',
        cohortName: 'CRM_2027',
        profitBucket: 'Resilient',
        concentration: 'Region',
        unitOfAccountName: 'RL8003A2015LPNOR99',
        unitOfAccountDescription: 'RL8003A2015LPNOR99',
        isActive: true
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        closeModal(); // Close modal after submission
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Unit of Account Definitions"
                className="absolute w-[30vw] h-[60vh] rounded left-[40%] top-[30%] bg-[#434344] shadow-2xl border-0 modal-animation"
                overlayClassName="modal-overlay"
            >
                <div className='w-[100%] h-[10%]  flex items-center text-white justify-center border-0' >
                    <p className="text-2xl">Unit of Account Definitions</p>
                </div>
                <form onSubmit={handleSubmit} className='w-[100%] h-[85%] flex flex-col border-0 justify-start overflow-y-scroll mt-[5%] '  >
                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Portfolio Name :</label>
                        <select name="portfolioName" value={formData.portfolioName} onChange={handleInputChange} className="border  p-[2%] w-[40%] ml-[5%] ">
                            <option value="LH6-NewRe_EUR ">LH6-NewRe_EUR</option>
                            <option value="LH6-NewRe_US">LH6-NewRe_US</option>
                        </select>
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Cohort Name:</label>
                        <select name="cohortName" value={formData.cohortName} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                            <option value="CRM_2027">CRM_2027</option>
                            <option value="CRM_2028">CRM_2028</option>
                        </select>
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Profit Bucket:</label>
                        <select name="profitBucket" value={formData.profitBucket} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                            <option value="Resilient">Resilient</option>
                            <option value="Stable">Stable</option>
                        </select>
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Concentration:</label>
                        <select name="concentration" value={formData.concentration} onChange={handleInputChange} className="border p-[2%] w-[40%] ml-[5%] ">
                            <option value="Region">Region</option>
                            <option value="Global">Global</option>
                        </select>
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Unit of Account Name:</label>
                        <input
                            type="text"
                            name="unitOfAccountName"
                            value={formData.unitOfAccountName}
                            onChange={handleInputChange}
                            className="border p-[2%] w-[40%] ml-[5%] "
                        />
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Unit of Account Description:</label>
                        <input
                            type="text"
                            name="unitOfAccountDescription"
                            value={formData.unitOfAccountDescription}
                            onChange={handleInputChange}
                            className="border p-[2%] w-[40%] ml-[5%] "
                        />
                    </div>

                    <div className="mb-[2%] w-[100%] flex justify-start items-center px-[5%] ">
                        <label className="w-[40%] text-xl text-[#a7a6a7]  ">Is Active?</label>
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleInputChange}
                            className="border ml-[6%]"
                        />
                    </div>
                    
                    <div className="flex justify-end pr-[2%]">
                        <button type="submit" className="bg-green-500 text-white p-2 rounded mr-2">Save</button>
                        <button onClick={closeModal} type="button" className="bg-red-500 text-white p-2 rounded">Cancel</button>
                    </div>
                </form>
            </Modal>


            <div className=' w-[75vw] h-[90vh] bg-[#eaf1f4] ' >
                <div className='w-[100%] h-[20%] ' >
                    <div className='w-[100%] h-[50%] ' >
                        <p className='text-4xl ml-[2%] mt-[1%] ' >Units of Accounts Defination</p>
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
                            {rows.map((row, index) => (
                                <tr key={index} className='cursor-pointer hover:bg-[#4f4e4e] hover:text-white ' >
                                    <td className="border border-gray-300 px-4 py-2">{row.entityName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.unitOfAccount}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.portfolioName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.cohortName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.profitBucket}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.concentration}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.unitOfAccount_1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.unitOfAccount_2}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <input type="checkbox" checked={row.isActive} readOnly />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{row.createdUser}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.createdDate}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.modifiedUser}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.modifiedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Defination