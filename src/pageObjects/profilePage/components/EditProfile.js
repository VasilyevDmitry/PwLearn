import BaseComponents from "../../../components/BaseComponents.js";

export default class EditProfile extends BaseComponents {
     constructor(page) {
          super(page)

     this.profileName = page.locator(".profile_name")
     
    }
}