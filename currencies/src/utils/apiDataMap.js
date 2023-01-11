export default function currenciesMap(apiData) {
    // recibe la data
    // parseo la data como la quiera tener para manipularla
    // la guardo en el store 
    // la consumo desde table 
    apiData.shift();

    let data = []

    apiData.map(el => data.push(["mora@setandforget.io", el[1], "Complete", el[3]]));

    // let rows = []

    // apiData.map((el) => rows.push(el[3]))

    // let data = {
    //     'headers': headers,
    //     'rows': rows
    // }

    console.log(data)

    return data;

}