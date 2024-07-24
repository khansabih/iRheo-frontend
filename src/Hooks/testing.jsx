import { useState } from 'react';

export const useTesting = ()=>{
    const [data, setData] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    const getData = async(
        sigma_0 = 1, dot_sigma_inf = 0, slope_sigma = false,
        gamma_0 = 1, dot_gamma_inf = 0,
        slope_gamma = false, t_0 = 0, cut_top = 0, cut_bottom = 0,
        strain_percent = false, oversample_watch = true, oversample_method = 'cubic',
        oversample_number = 1000, number_datapoints = 200,
        test_data_payload, module
    )=>{
        var apiUrl = 'http://127.0.0.1:8000/api/v1/modules/';
        if(module === 'iRheo'){
            apiUrl = apiUrl+'irheo/';
        }else if(module === 'iRheoGT'){
            apiUrl = apiUrl+'irheo-gt/';
        }else if(module === 'iRheoFT'){
            apiUrl = apiUrl+'irheo-ft/';
        }else if(module === 'iRheoAFM'){
            apiUrl = apiUrl+'irheo-afm/';
        }

        const queryParams = { 
            'sigma_0': sigma_0, 
            'dot_sigma_inf': dot_sigma_inf,
            'slope_sigma': slope_sigma,
            'gamma_0': gamma_0,
            'dot_gamma_inf': dot_gamma_inf,
            'slope_gamma': slope_gamma,
            't_0': t_0,
            'cut_top': cut_top,
            'cut_bottom': cut_bottom,
            'strain_percent': strain_percent,
            'oversample_watch': oversample_watch,
            'oversample_method': oversample_method,
            'oversample_number': oversample_number,
            'number_datapoints': number_datapoints,
        };

        const url = new URL(apiUrl);
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

        console.log(url);

        setLoadingData(true);
        fetch(url, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(test_data_payload),
        }).then((response)=> response.json()).then((response_data)=>{
            console.log('SUCCESS : ',response_data);
            setData(response_data);
            setLoadingData(false);
        }).catch((err)=>{
            console.log(err);
            setLoadingData(false);
        })
    }

    return {data, loadingData, getData};
}