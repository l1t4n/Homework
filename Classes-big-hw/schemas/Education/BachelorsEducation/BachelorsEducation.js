import { Education } from "../..";

// SRP (single reason for change)
// LSP (substitutable for parent)
// OCP (extending the parent class)
export class BachelorsEducation extends Education {
  constructor({
    GPA,
    isDiplomaWithHonors,
    branchOfKnowledge,
    specialty,
    imgSrc,
  }) {
    super({ GPA, isDiplomaWithHonors, branchOfKnowledge, specialty, imgSrc });
  }
}
