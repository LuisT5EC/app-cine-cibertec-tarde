package pe.edu.cibertec.appcinecibertectarde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.cibertec.appcinecibertectarde.model.bd.RegistroAsiento;

@Repository
public interface RegistroAsientoRepository
        extends JpaRepository<RegistroAsiento, Integer>
{

}
