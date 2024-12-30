import React, { useState } from 'react';
import { Input, Button, AutoComplete } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';
import city from '../data/city.json';
import job from '../data/job.json'
import CardCategorie from '../components/CardCategorie';
import chef from "../assets/chef.png"
import admin from "../assets/administrator.png"
import healthcare from "../assets/nurse.png"
import welders from "../assets/welder.png"
import finance from "../assets/finance.png"
import logistics from "../assets/logistics.png"
import art from "../assets/art.png"
import Background from '../components/Background';



const StartPage = () => {
    const [options, setOptions] = useState([]);

    const handleJobSearch = (searchText) => {
        if (searchText) {
            const filteredJobs = job.jobs // Le fichier JSON contenant les métiers s'appelle "job"
                .filter((job) =>
                    job.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    job.synonyms.some((synonym) => synonym.toLowerCase().includes(searchText.toLowerCase()))
                )
                .slice(0, 8); // Limite les résultats à 8

            const formattedOptions = filteredJobs.map((job) => ({
                value: job.name,
                synonyms: job.synonyms.join(", ")  // Affiche les synonymes séparés par des virgules
            }));

            setOptions(formattedOptions);
        } else {
            setOptions([]); // Efface les résultats si la recherche est vide
        }
    };

    const handleCitySearch = (searchText) => {
        if (searchText) {
            const filteredCities = city
                .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
                .slice(0, 8);

            const formattedOptions = filteredCities.map((city) => ({ value: city }));

            setOptions(formattedOptions);
        } else {
            setOptions([]);
        }
    };

    return (
        <>
            {/* <Background /> */}
            <div className='containers_home'>
                <div className='containers_info_job'>
                    <div className='title'>
                        <div className='title_header'>
                            <h2>Find your job</h2>
                        </div>
                        <div className='search-bar'>
                            <AutoComplete className='auto'
                                options={options}
                                onSearch={handleJobSearch}
                                placeholder="Job title, keywords"
                                allowClear={{
                                    clearIcon: <CloseSquareFilled />,
                                }}
                            />
                            <AutoComplete className='auto'
                                options={options}
                                onSearch={handleCitySearch}
                                placeholder="city, province or région"
                                allowClear={{
                                    clearIcon: <CloseSquareFilled />,
                                }}
                            />
                            <Button>Search</Button>
                        </div>
                    </div>
                </div>

                <div className='title_categories'>
                    <h2>Popular Categories</h2>
                    <div className='card_job'>
                        <CardCategorie img={chef} name={'Restaurant/Food Service'} number={329} />
                        <CardCategorie img={admin} name={'Telecommunications'} number={1.219} />
                        <CardCategorie img={healthcare} name={'Healthcare/Medecin'} number={470} />
                        <CardCategorie img={welders} name={'Constructions/Facilities'} number={1.090} />
                        <CardCategorie img={finance} name={'Finance/Acounting'} number={10.329} />
                        <CardCategorie img={logistics} name={'Logistics & Transports'} number={219} />
                        <CardCategorie img={art} name={'Art/Design & Multimedia'} number={5.629} />
                        <CardCategorie img={admin} name={'Education'} number={1.219} />
                    </div>
                </div>

                <div className='test'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>
        </>
    );
};

export default StartPage;