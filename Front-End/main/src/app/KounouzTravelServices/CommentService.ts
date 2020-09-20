import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BasicService } from './BasicService';
import { Comment } from '../KounouzTravelModals/Comment';

@Injectable()
export class CommentService extends BasicService<Comment>{
  public getAllName = '/Comment/CommentManager';
  public deleteName = '/Comment/deleteComment';
  public saveName = '/Comment/saveComment';
  public getByIdName = '/Comment/CommentById/';

}
