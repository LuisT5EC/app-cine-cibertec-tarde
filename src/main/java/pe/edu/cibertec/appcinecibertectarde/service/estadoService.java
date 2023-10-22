package pe.edu.cibertec.appcinecibertectarde.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pe.edu.cibertec.appcinecibertectarde.model.bd.estado;
import pe.edu.cibertec.appcinecibertectarde.repository.estadoRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class estadoService {

    private estadoRepository estadoRepository;

    public List<estado> listarEstados(){
        return estadoRepository.findAll();
    }

    public boolean registrarEstado(estado estado){
        return estadoRepository.save(estado) != null;
    }

    public void eliminarEstado(Integer idEestado){
        estadoRepository.deleteById(idEestado);
    }
}
