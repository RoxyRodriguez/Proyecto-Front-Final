import React from 'react'

const ServiceTipo = () => {
    return (
        <>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                    <h4><i class="fas fa-notes-medical fa-lg me-2"></i>Ecografía General</h4>                    
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                    <h4><i class="fas fa-notes-medical fa-lg me-2"></i>Ecografía Doppler</h4>                    
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                    <h4><i class="fas fa-notes-medical fa-lg me-2"></i>Ecografía Músculo Esquelético</h4>                    
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                    <h4><i class="fas fa-notes-medical fa-lg me-2"></i>Ecografía Partes Blandas</h4>              
                  </a>
                </li>
              </ul>
            </div>   
        </>
    )
}

export default ServiceTipo
