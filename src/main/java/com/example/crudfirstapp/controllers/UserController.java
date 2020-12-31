package com.example.crudfirstapp.controllers;

import com.example.crudfirstapp.dto.UserDTO;
import com.example.crudfirstapp.models.User;
import com.example.crudfirstapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {
    //    edw apo katw vazw gia kp logo to interface, dld to UserService
    @Autowired
    UserService userService;

    //    to pou tha akouei (to url pou vazei o xrhsths) o controller to orizw panw apo kathe methodo
    //    h parakatw methodos tha pairnei apo to User tous xrhstes mesa se mia lista kai meta
    //    tha epistrefei ena JSON me autous tous xrhstes
    //    READ
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> fetchAllUsers() {
        //  kalw to userService pou eftiaksa apo panw
        List<User> allUsers = userService.getAllUsers();
        return allUsers;
    }

    //    me th methodo post, o server perimenei na parei enan neo user apo to xrhsth
    //    CREATE
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public void insertNewUser(UserDTO userdto) {
//        akrivws apo panw, gia na kserei to back oti tha tou erthei apo to front ena object typou UserDTO
//        prepei mesa sto UserServiceImpl na ftiaksw mia nea methodo pou tha analamvanei na
//        metaferei sto repository ta dedomena pros apothhkeush
//        kalw th methodo insertUser kai ths vazw mesa to userdto pou phra apo to front
        userService.insertUser(userdto);
        // TODO Handle return exceptions from duplicate entries for user_id and username
    }

    //    edw apo katw thelw na parw enan xrhsth, wste meta na ton kanw edit kai update
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User fetchUser(@RequestParam("userId") long userId, @RequestParam("username") String username) {
//    to @RequestParam psaxnei stis parametrous tou url (epd exw get request, auto einai meta to ?)
//    na vrei mia parametro me onoma o,ti einai mesa sthn parenthesh tou @RequestParam()
//    kai thn timh ths parametrou paei kai th vazei mesa sth metavlhth pou einai akrivws dipla,
//    h opoia legetai userId kai einai typou long

        User user = userService.getUser(userId, username);
        return user;
    }

    //    UPDATE
    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public User changeUser(User user) {
//        to apo panw user to pairnw apo to body tou PUT request
        return userService.updateUser(user);
    }

    // DELETE
    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
//    tou lew oti phra ton tade user kai ton esvhsa:
    public User removeUser(@RequestParam("userId") long userId, @RequestParam("username") String username) {
        User user = userService.deleteUser(userId, username);
        return user;
    }
}
