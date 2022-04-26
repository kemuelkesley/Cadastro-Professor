async function consultaApi(endpoint) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 9b647431ec66af3bb674ea66b60b63dd059c29e9");
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
        mode: 'no-cors',
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://portaldeservicos.fiea.com.br/relatoriosSESI/sge/formulario_professor.php${endpoint}`, requestOptions)
    .then(response => response.json())
    .then((result) => { 
        return result            
    })
    .catch(error => console.log('error', error));
}

async function buscaFilial(CodColigada){
   
    let endpoint = `?rota=filial&CodColigada=${CodColigada}`;    
    let consulta = await consultaApi(endpoint);     
   

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODFILIAL+'">'+consulta[i].FILIAL+'</option>'
    }
    document.getElementById('filial').innerHTML = html;

}


async function corRaca(){
   
    let endpoint = `?rota=corraca`;
    let consulta = await consultaApi(endpoint); 
    console.log(consulta);
    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODCLIENTE+'">'+consulta[i].DESCRICAO+'</option>'
    }
    document.getElementById('corraca').innerHTML = html;

}


async function dsNascionalidade(){
    
    let endpoint = `?rota=nacionalidade`;
    let consulta = await consultaApi(endpoint); 

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODCLIENTE+'">'+consulta[i].DESCRICAO+'</option>'
    }
    document.getElementById('nacionalidade').innerHTML = html;
    

}    


async function selectNaturalidade(idEstado){
    
    let endpoint = `?rota=naturalidade&estado=${idEstado}`;
    let consulta = await consultaApi(endpoint); 

    // console.log(consulta, idEstado); 
    // console.dir(idEstado)

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODMUNICIPIO+'">'+consulta[i].NOMEMUNICIPIO+'</option>'
    }
    document.getElementById('naturalidade').innerHTML = html;
    
}


async function estadoNatal(){
   
    let endpoint = `?rota=estado-natal`;
    let consulta = await consultaApi(endpoint); 

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option data-CODETD="'+consulta[i].CODETD+'" value="'+consulta[i].CODETD+'">'+consulta[i].CODETD+'</option>'
    }
    document.getElementById('estado-natal').innerHTML = html;
    
}


async function grauDeInstrucao(){
    
    let endpoint = `?rota=grau`;
    let consulta = await consultaApi(endpoint); 

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODCLIENTE+'">'+consulta[i].DESCRICAO+'</option>'
    }
    document.getElementById('grau').innerHTML = html;
}


async function paisOrigem(){
    
    let endpoint = `?rota=pais`;
    let consulta = await consultaApi(endpoint); 

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].IDPAIS+'">'+consulta[i].DESCRICAO+'</option>'
    }
    document.getElementById('pais').innerHTML = html;
    
}


async function estadoOrigem(){
    
    let endpoint = `?rota=estado`;
    let consulta = await consultaApi(endpoint); 

    let html='<option value="">Selecione</option>';
    for(i=0;i<consulta.length;i++){
        html += '<option value="'+consulta[i].CODETD+'">'+consulta[i].NOME+'</option>'
    }
    document.getElementById('estado').innerHTML = html;
    
}


async function cpfOrigem(cpf){
    
    let endpoint = `?rota=cpf&cpf=${cpf}`;
    let consulta = await consultaApi(endpoint); 
    console.log(consulta);

    document.getElementById('nome').value             = consulta[0].FUNOMFUNC;     
    document.getElementById('estado-natal').value     = consulta[0].ESTADONATAL;
    document.getElementById('naturalidade').value     = consulta[0].NATURALIDADE;
    document.getElementById('nacionalidade').value    = consulta[0].NACIONALIDADE;
    document.getElementById('sex').value              = consulta[0].SEXO;
    document.getElementById('corraca').value          = consulta[0].CORRACA;
    document.getElementById('grau').value             = consulta[0].GRAUINSTRUCAO;
    document.getElementById('nascimento').value       = consulta[0].DTNASCIMENTO;
    document.getElementById('email').value            = consulta[0].EMAIL;      
    document.getElementById('cel').value              = consulta[0].TELEFONE1;
    document.getElementById('cep').value              = consulta[0].FUCEP;
    document.getElementById('logradouro').value       = consulta[0].FUENDERECO;
    document.getElementById('estado').value           = consulta[0].ESTADO;
    document.getElementById('numero').value           = consulta[0].NUMERO;
    document.getElementById('bairro').value           = consulta[0].FUBAIRRO;
    document.getElementById('pais').value             = consulta[0].PAIS;    
}





