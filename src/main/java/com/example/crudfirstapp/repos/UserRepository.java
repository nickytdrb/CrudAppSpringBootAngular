package com.example.crudfirstapp.repos;

import com.example.crudfirstapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// to UserRepository to kanei implement to Spring

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    //    to Integer einai o typos tou primary key tou User
//    edw mesa grafw ta queries pou tha ektelesw sth vash kai ta opoia aforoun thn klash User
//    an eixa allon pinaka, tha eftiaxna allo repository gia auto, paei ana Entity
//    arxika ftiaxnw ena query pou tha mou fernei olous tous users
//    epd dynhtika mou epistrefei pollous users, thelw na tous valw se mia List
//    epd oles oi methodoi mesa sto interface einai public, de xreiazetai na grapsw
//    th leksh public
//    an valw query panw apo ayth th methodo, to findByTade einai apla ena onoma
//    kai den kanei kapoio query
//    to Hibernate kanonika, an den eixa query apo panw, mou ftiaxnei to named query wste actually na kanei kati
    @Query(value = "SELECT u FROM User u")
//    akrivws apo panw, meta to select vazw to onoma tou pinaka, to opoio edw einai klash
//    de grafw select *, alla select User, dioti auto kanoume sthn HQL
    List<User> findAllUsers();
//    to parapanw findAllUsers ektelei (among other thigs) to apo panw query
//    dld, akoma ki an den exei agkyles meta, dld den exei swma, kanei kati
//    auto to kati, einai oti mou fernei olous tous Users, sto shmeio pou to kanw, dld sto UserServiceImpl
}
