import {Injectable} from '@angular/core';

export const LABELS = {
    tit_nuevo_proyecto: "Nuevo Proyecto",
    cmp_nombre: "Nombre",
    cmp_identificador: "Identificador",
    cmp_descripcion: "Descripción",
    cmp_cientifico_leader: "Cientifico Lider",
    acc_guardar: "Guardar",
    acc_cancelar: "Cancelar",
}

@Injectable()
export class LabelsService {
    getLabels() {
        return LABELS;
    }
}
