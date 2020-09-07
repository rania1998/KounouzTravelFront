import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Commentaire } from '../KounouzTravelModals/Commentaire';

@Injectable()
export class CommentaireService extends BasicService<Commentaire>{
  public getAllName = '/Commentaire/CommentaireManager';
  public deleteName = '/Commentaire/deleteCommentaire';
  public saveName = '/Commentaire/saveCommentaire';
  public getByIdName = '/Commentaire/CommentaireById/';

}
