package com.consola.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.consola.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {

}