package com.example.crudfirstapp.controllers;

import com.example.crudfirstapp.models.User;
import com.example.crudfirstapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    //    edw apo katw vazw gia kp logo to interface, dld to UserService
    @Autowired
    UserService userService;

    //    to pou tha akouei (to url pou vazei o xrhsths) o controller to orizw panw apo kathe methodo
    //    h parakatw methodos tha pairnei apo to User tous xrhstes mesa se mia lista kai meta
    //    tha epistrefei ena JSON me autous tous xrhstes
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> fetchAllUsers() {
        //  kalw to userService pou eftiaksa apo panw
        List<User> allUsers = userService.getAllUsers();
        return allUsers;
    }
}
