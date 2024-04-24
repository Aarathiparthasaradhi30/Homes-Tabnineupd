// scripts.js
function initMap() {
    const mapCanvas = document.getElementById('map-canvas');
    const map = new google.maps.Map(mapCanvas, {
        center: { lat: -25.363, lng: 131.044 },
        zoom: 4,
    });

    // Add markers for featured properties
    const featuredProperties = [
        { lat: -34.397, lng: 150.644 },
        { lat: 21.291, lng: -157.821 },
        { lat: 41.878, lng: -87.629 },
    ];

    featuredProperties.forEach((property) => {
        const marker = new google.maps.Marker({
            position: property,
            map: map,
        });
    });
}
