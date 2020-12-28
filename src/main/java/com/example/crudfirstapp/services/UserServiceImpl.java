package com.example.crudfirstapp.services;

import com.example.crudfirstapp.models.User;
import com.example.crudfirstapp.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
// apo panw dinw ena nickname sto bean UserServiceImpl, pou einai typou Service
public class UserServiceImpl implements UserService {
    @Autowired
//    edw einai sa na ftiaxnw nea metavlhth typou UserRepository
    UserRepository userRepository;
//    epomenws, parakatw pleon mporw na grapsw userRepository.kati opou kati einai mia methodos
//    ths klashs UserRepository
//    to userRepository prepei na to valw mesa se mia methodo, px thn getAllUsers, alliws de tha ektelestei,
//    auto symvainei gnk sth Java

    @Override
    public List<User> getAllUsers() {
//        edw mesa kalw to Repository
        List<User> users = userRepository.findAllUsers();
//        se auto to shmeio exw parei tous Users pou epistrefei to findAllUsers kai tous exw valei
//        mesa se mia kainourgia lista, pou th lew users
        return users;
    }

}
