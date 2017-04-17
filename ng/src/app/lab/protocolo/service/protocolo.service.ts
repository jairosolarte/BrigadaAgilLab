import {Injectable} from "@angular/core";
import {PROTOCOLOS} from "./protocolo.list";


@Injectable()
export class ProtocoloService {
    listarProtocolos() {
        return Promise.resolve(PROTOCOLOS);
    }
}
