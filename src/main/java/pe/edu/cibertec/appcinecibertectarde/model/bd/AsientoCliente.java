package pe.edu.cibertec.appcinecibertectarde.model.bd;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "asientocliente")
public class AsientoCliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idacliente;
    @Column(name = "idrasiento")
    private Integer idrasiento;
    @Column(name = "idcliente")
    private Integer idcliente;
}
