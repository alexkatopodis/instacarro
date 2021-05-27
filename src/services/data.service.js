import axios from 'axios';

const GetInstaCarroData = async () => {
    try{
        const result = await axios.get("https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json")
        if(result.statusText === "OK"){
            const orderedResult = result.data.sort((a,b) => {
                return a.remainingTime < b.remainingTime ? -1 : a.remainingTime > b.remainingTime ? 1 : 0;
            });
        return {status: "success", content: orderedResult}
        }else{
            return {status: "error", message: "Erro na Busca de Dados"} 
        }
    }catch(e){
     return {status: "error", message: e.message}
    }
}

export default GetInstaCarroData;