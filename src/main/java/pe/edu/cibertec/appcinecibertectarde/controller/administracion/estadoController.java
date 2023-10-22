package pe.edu.cibertec.appcinecibertectarde.controller.administracion;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.cibertec.appcinecibertectarde.service.estadoService;

@AllArgsConstructor
@Controller
@RequestMapping("/administracion/estado")
public class estadoController {

    private estadoService estadoService;

    @GetMapping("/frmEstado")
    public String frmEstado(Model model){
        model.addAttribute("listaestados", estadoService.listarEstados());
        return "administracion/frmEstado";
    }

}
