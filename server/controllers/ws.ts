
import { Request, Response } from "express";
import scrapeIt from 'scrape-it';

const getData = async(req: Request, res: Response): Promise<void> => {
    const data: any = await scrapeIt('http://www.aire.cdmx.gob.mx/default.php', {
        clima: {
            listItem: '#basedatoscalidadaire',
            data: {
                hora: '#calidadairehora',
                temperatura: '#calidadairetemperaturaahora',
                riesgo: '#renglondosdatoscalidadaireahora'
            }
        }
    });
    res.status(200).json({ok: true, data: {...data.data.clima}});
}

export {
    getData
}