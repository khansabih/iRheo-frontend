export const parseFileContent = (module, file) => {
    const lines = file.trim().split('\n');

    // This is to get the contents of the file in a format server is accepting
    // var finalPayloadArr = [];
    // const truncatedLines = lines.slice(0, MAX_LINES);
    const truncatedLines = lines;
    const payload = truncatedLines.map(line => {
        const columns = line.split('\t');
        // console.log(columns);
        // if(columns.length > 1){
        //     finalPayloadArr.push(columns);
        // }

        // return finalPayloadArr;
        return columns.filter(item => item.trim().length > 1).map(item => item.trim());
    }).filter(columns => columns.length > 0);

    // This area is purely for frontend as we need to display the sample file.
    if(module === 'iRheo'){
        const lines = file.trim().split('\n');
        const time = [];
        const stress = [];
        const strain = [];
        
        lines.forEach(line => {
            const values = line.trim().split(/[\t\s]+/); // Split by any number of spaces or tabs
            if (values.length === 3) {
            time.push(parseFloat(values[0]));
            stress.push(parseFloat(values[1]));
            strain.push(parseFloat(values[2]));
            }
        });

        return { payload, time, stress, strain };
    }else if(module === 'iRheoGT'){
        const lines = file.split('\n');
        const time = [];
        const gt = [];
        
        lines.forEach(line => {
            const values = line.trim().split(/[\t\s]+/); // Split by any number of spaces or tabs
            if (values.length === 2) {
                time.push(parseFloat(values[0]));
                gt.push(parseFloat(values[1]));
            }
        });

        return { payload, time, gt };
    }else if(module === 'iRheoFT'){
        const lines = file.split('\n');
        const time = [];
        const ft = [];
        
        lines.forEach(line => {
            const values = line.trim().split(/[\t\s]+/); // Split by any number of spaces or tabs
            if (values.length === 2) {
                time.push(parseFloat(values[0]));
                ft.push(parseFloat(values[1]));
            }
        });

        return { payload, time, ft };
    }else if(module === 'iRheoAFM'){
        const lines = file.split('\n').slice(0,10000);
        const time = [];
        const force = [];
        const indentations = [];
        
        lines.forEach(line => {
            const values = line.trim().split(/[\t\s]+/); // Split by any number of spaces or tabs
            if (values.length === 3) {
                // time.push(parseFloat(values[0]));
                // force.push(parseFloat(values[1]));
                // indentations.push(parseFloat(values[2]));
                const timeVal = parseFloat(values[0]);
                const forceVal = parseFloat(values[1]);
                const indentationVal = parseFloat(values[2]);
                console.log('Parsed type:', typeof(timeVal), typeof(forceVal), typeof(indentationVal));
                
                if (!isNaN(timeVal) && !isNaN(forceVal) && !isNaN(indentationVal)) {
                    time.push(timeVal);
                    force.push(forceVal);
                    indentations.push(indentationVal);
                }else{
                    console.log('Error parsing the line', line);
                }
            
            }
        });

        return { payload, time, force, indentations };
    }
}