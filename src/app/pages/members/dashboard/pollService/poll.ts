export interface Poll {
  poll: {
    id: Number;
    patient: { allergy: String; drugs: String; desc: String };
    title: String;
    description: String;
    options: [{ title: String; votes: Number }];
  };
}
