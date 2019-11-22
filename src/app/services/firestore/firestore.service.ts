import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore:AngularFirestore
  ) { }
  //get all
  getServices():Observable<any>{
   return this.firestore.collection('service').snapshotChanges();
  }
  //get one
  getService(id:string):Observable<any>{
    return this.firestore.collection('service').doc(id).snapshotChanges();
  }
  //edit
  editService(id:string,data:any){
    return this.firestore.collection('service').doc(id).set(data);
  }
  //delete
  deleteService(id:string){
    return this.firestore.collection('service').doc(id).delete();
  }

  //crear
  createService(data:any){
    return this.firestore.collection('service').add(data);
  }
}
