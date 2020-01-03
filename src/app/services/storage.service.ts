import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

export interface Boardroom {
  modified: number;
  title: string;
  id: number;
  users: [];
  polls: [
    {
      id: number;
      patient: {
        allergy: string;
        drugs: string;
        desc: string;
      };
      questions: [
        {
          title: string;
          description: string;
          options: [
            {
              title: string;
              votes: number;
            }
          ];
        }
      ];
    }
  ];
}

const BOARDROOMS_KEY = "my-boardrooms";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage) {}

  createBoardroom(boardroom: Boardroom): Promise<any> {
    return this.storage.get(BOARDROOMS_KEY).then((boardrooms: Boardroom[]) => {
      if (boardrooms) {
        boardrooms.push(boardroom);
        return this.storage.set(BOARDROOMS_KEY, boardrooms);
      } else {
        return this.storage.set(BOARDROOMS_KEY, [boardroom]);
      }
    });
  }
  getBoardrooms(): Promise<Boardroom[]> {
    return this.storage.get(BOARDROOMS_KEY);
  }

  updateBoardroom(boardroom: Boardroom) {
    return this.storage.get(BOARDROOMS_KEY).then((boardrooms: Boardroom[]) => {
      if (!boardrooms || boardrooms.length === 0) {
        return null;
      }

      let newBoardrooms: Boardroom[] = [];
      for (let i of boardrooms) {
        if (i.id === boardroom.id) {
          newBoardrooms.push(boardroom);
        } else {
          newBoardrooms.push(i);
        }
      }
      return this.storage.set(BOARDROOMS_KEY, newBoardrooms);
    });
  }

  deleteBoardroom(id: number): Promise<Boardroom> {
    return this.storage.get(BOARDROOMS_KEY).then((boardrooms: Boardroom[]) => {
      if (!boardrooms || boardrooms.length === 0) {
        return null;
      }
      let toKeep: Boardroom[] = [];

      for (let i of boardrooms) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(BOARDROOMS_KEY, toKeep);
    });
  }
}
