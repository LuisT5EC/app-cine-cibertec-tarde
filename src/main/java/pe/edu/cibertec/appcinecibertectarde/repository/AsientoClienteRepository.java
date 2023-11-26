package pe.edu.cibertec.appcinecibertectarde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.cibertec.appcinecibertectarde.model.bd.AsientoCliente;

@Repository
public interface AsientoClienteRepository
        extends JpaRepository<AsientoCliente, Integer> {
    /*
    @Transactional // Solo para procedimientos almacenados que utilizan INSERT, UPDATE O DELETE
    @Modifying // Solo para procedimientos almacenados que utilizan INSERT, UPDATE O DELETE
    @Query(value = "{call spRegistrarTransaccion(:idregistro, :idcliente)}",
            nativeQuery = true)
    void registrarTransaccion(@Param("idregistro") Integer idregistro,
                              @Param("idcliente") Integer idcliente);
    */

}
