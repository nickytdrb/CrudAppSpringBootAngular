package com.example.crudfirstapp.services;

import com.example.crudfirstapp.dto.UserDTO;
import com.example.crudfirstapp.models.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    void insertUser(UserDTO user);

    User getUser(long userId, String username);
}
