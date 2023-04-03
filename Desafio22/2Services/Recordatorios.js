import crypto from 'crypto'
import Recordatorio from '../1Models/Recordatorio.js'
import RecordatoriosDao from '../1Persistence/Recordatorios.js'

const dao = new RecordatoriosDao()


export default class RecordatoriosApi {
    constructor() {
        
    }

    getRecordatorios() {
        return dao.getRecordatorios()
    }
    
    createRecordatorio({datos}) {
        const id = crypto.randomBytes(10).toString('hex')
        const timestamp = new Date().toLocaleString()
        const nuevoRecordatorio = new Recordatorio(id, {timestamp, ...datos})
        console.log(this.dao);
        dao.createRecordatorio(nuevoRecordatorio)
        console.log(nuevoRecordatorio);
        return nuevoRecordatorio
    }
    
    marcarLeidoRecordatorio({id}) {
        const recordatorioLeido = dao.marcarLeidoRecordatorio(id)
        return recordatorioLeido
    }
    
    deleteRecordatoriosLeidos() {
        const deleted = dao.deleteRecordatoriosLeidos()
    
        return deleted
    }
}