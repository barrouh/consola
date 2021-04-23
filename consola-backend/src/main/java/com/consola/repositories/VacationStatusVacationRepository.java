package com.consola.repositories;

import com.consola.model.VacationStatusVacation;
import com.consola.model.VacationStatusVacationId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface VacationStatusVacationRepository extends JpaRepository<VacationStatusVacation, VacationStatusVacationId>, JpaSpecificationExecutor<VacationStatusVacation> {

}