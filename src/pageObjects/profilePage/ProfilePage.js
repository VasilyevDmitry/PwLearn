import BasePage from "../BasePage";
import EditProfile from "./components/editProfile";

export default class ProfilePage extends BasePage{
    constructor(page) {
        super(page, "/panel/profile", page.getByRole('button', { name: 'Edit profile' }))
        this.btnEditProfile = page.getByRole('button', { name: 'Edit profile' })
        this.editProfile = new EditProfile(page)
    }

    async clickEditProfile(){
        await this.btnEditProfile.click()
    }
   
}