package com.engcorreia.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.engcorreia.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
