import React from 'react'
import "./single_card.css"
import hotel_img1 from "../../assets/hotel_img1.jpg"
import hotel_img2 from "../../assets/hotel_img2.jpg"
import room_img from "../../assets/room_img1.jpg";
import user_img from "../../assets/user_img.png";
import img_map from "../../assets/img_map.jpg"
import { FaStar } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const position = [51.505, -0.09];

import { Select, Stack } from '@chakra-ui/react';
import { DateRangePicker } from 'react-dates';

const Single_Card = () => {
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());

    return (
        <div className='single_card'>
            <h6>Линнеахольме частный остров до которого можно добраться по пешеходному мосту</h6>
            <div className='single_img'>
                <div className='single_img-left'>
                    <img src={hotel_img1} alt="img" />
                </div>
                <div className='single_img-right'>
                    <img src={hotel_img2} alt="img" />
                    <img src={hotel_img2} alt="img" />
                    <img src={hotel_img2} alt="img" />
                    <img src={hotel_img2} alt="img" />
                </div>
            </div>

            <div className='single_card-boxs'>
                <div className='card_box1'>
                    {/* ============ */}
                    <div className='box1_title'>
                        <h5>Title</h5>
                        <p>10 гостей 6 спален 8 кроватей 2 ванные</p>
                        <div className='card_box1-rote'>
                            <span><FaStar /></span>
                            <p>4.6 24 отзыва</p>
                        </div>
                    </div>
                    <hr className=' line' />

                    {/* ======== */}
                    <div className="box1_user">
                        <img src={user_img} alt="user image" />
                        <div className='box1-user-name'>
                            <h6>Хозяин: Grigory Ishuk</h6>
                            <p>5 лет принимает гостей</p>
                        </div>
                    </div>
                    <hr className=' line' />

                    {/* ============== */}
                    <div className='card_box1-texts'>
                        <div className='card_box1-text'>
                            <span><IoWifi /></span>
                            <div className='box1-text'>
                                <h5>Быстрый Wi-Fi </h5>
                                <h6>На скорости 235 Мбит/с вы можете принимать видео звонки и транслировать видео для всей группы</h6>
                            </div>
                        </div>
                        <div className='card_box1-text'>
                            <span><IoWifi /></span>
                            <div className='box1-text'>
                                <h5>Беспоатная отмена в течение 48 часов </h5>
                            </div>
                        </div>
                        <div className='card_box1-text'>
                            <span><LuDoorOpen /></span>
                            <div className='box1-text'>
                                <h5>Самостоятельное прибытие  </h5>
                                <h6>Вы заселитесь самостоятельно на двери умный звонок</h6>
                            </div>
                        </div>
                    </div>

                    <hr className='line' />

                    {/* ============ */}
                    <div className='card_box1-textt'>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...</p>
                        <div className='box1-textt-showMore'>
                            <h6>Показать ещё</h6>
                            <span><GoChevronRight /></span>
                        </div>
                    </div>

                    <hr className='line' />

                    {/* ========= */}
                    <div className='card_box1-rooms'>
                        <div className='box1-rooms-nav'>
                            <h6>Где вы будете спать</h6>
                            <div className='box1-rooms-page'>
                                <p>1/3</p>
                                <span className='box1-rooms-page-b'><GoChevronLeft /></span>
                                <span><GoChevronRight /></span>
                            </div>
                        </div>

                        <div className='card_box1-roomss'>
                            <div className='card_box1-room'>
                                <img src={room_img} alt="img" />
                                <h6>Спальня</h6>
                                <p>1 односпальнпя кровать </p>
                            </div>
                            <div className='card_box1-room'>
                                <img src={room_img} alt="img" />
                                <h6>Спальня</h6>
                                <p>1 односпальнпя кровать </p>
                            </div>
                        </div>
                    </div>

                    {/* ========== */}
                    <div className='card_box1-wifi'>
                        <h6>Какие удобства вас ждут</h6>
                        <div className='card_box1-wifis'>

                            <div className='box1_wifis-left'>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Class aptent taciti </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                            </div>

                            <div className='box1_wifis-right'>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Class aptent taciti </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                                <div className='box1_wifi'>
                                    <span><IoWifi /></span>
                                    <h6>Быстрый Wi-Fi  </h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ========== */}
                    <div className='card_box1-btn'>
                        <button>Показать все удобства: 12</button>
                    </div>

                    {/* ================ */}

                </div>

                <div className='card_box2-big'>
                    <div className='card_box2'>
                        <h5>125 000сум <span>ночь</span></h5>
                        <div className='card_box2-date'>
                            <div className='date_text'>
                                <h6>Прибытие</h6>
                                <p>09.03.2024</p>
                            </div>
                            <div className='date_text'>
                                <h6>Выезд</h6>
                                <p>12.03.2024</p>
                            </div>
                        </div>
                        <Stack className='stack'>
                            <Select variant='outline' className='bbbgg'>
                                <option hidden value="">
                                    <div className='select_title'>
                                        <h6>Для кого</h6>
                                        <p>1 гость</p>
                                    </div>
                                </option>
                                <option value="rvrsv">vrsvsrvrs</option>
                                <option value="rvrsv">vrsvsrvrs</option>
                                <option value="rvrsv">vrsvsrvrs</option>
                            </Select>
                        </Stack>
                        {/* <form action="">
                        <label for="id">sevsvrvrfsrfvsfr</label>
                        <select name="id" id="id">
                            <option hidden value=""></option>
                            <option value="rsvsrvsrvrss">svsvsrfvvrssr</option>
                            <option value="rsvsrvsrvrss">svsvsrfvvrssr</option>
                        </select>
                    </form> */}
                        <button className='card_box2-btn'>Button</button>

                        <div className='card_box2-tolovlar'>
                            <div className='box2_tovol'>
                                <h5>125 000сум x5 </h5>
                                <p>625 000сум</p>
                            </div>
                            <div className='box2_tovol'>
                                <h5>Плата за уборку </h5>
                                <p>625 000сум</p>
                            </div>
                            <div className='box2_tovol'>
                                <h5>Сервисный сбор thebron </h5>
                                <p>625 000сум</p>
                            </div>
                        </div>
                        <hr />
                        <div className='card_box2-footer'>
                            <h4>Всего(без учета)</h4>
                            <h5>745 000сум</h5>
                        </div>
                    </div>
                </div>

            </div>


            <div className='card_box2-calendar'>
                <Calendar onChange={onChange} value={value} />
                <Calendar onChange={onChange2} value={value2} />
            </div>

            <hr className=' line' />

            <div className='card_box1-grade'>
                <div className='box1_grade-box1'>
                    <h6>Общая оценка</h6>
                    <div className='grade_box-charts'>
                        <div className='grade_box-chart'>
                            <p>5</p>
                            <div className='box_chart1 box_chart'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='grade_box-chart'>
                            <p>4</p>
                            <div className='box_chart2 box_chart'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='grade_box-chart'>
                            <p>3</p>
                            <div className='box_chart3 box_chart'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='grade_box-chart'>
                            <p>2</p>
                            <div className='box_chart4 box_chart'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Чистота</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Точность</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Прибытие</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Общение</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Местоположение</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
                <hr className='grade_line' />
                <div className="box1_grade-box2">
                    <h6>Соотношение/цена качество</h6>
                    <p>4.7</p>
                    <span><IoKeyOutline /></span>
                </div>
            </div>

            <div className='user_data'>

                <div className='user_card'>
                    <div className='user_card-name'>
                        <img src={user_img} alt="user image" />
                        <div className='user_name'>
                            <h6>Sven</h6>
                            <p>Германия</p>
                        </div>
                    </div>

                    <div className='user_data-term'>
                        <div className='tern-icon'>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                        </div>
                        <h6>август 2023 г. </h6>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-termm'>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-text'>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C</p>
                        <div className='box1-textt-showMore'>
                            <h6>Показать ещё</h6>
                            <span><GoChevronRight /></span>
                        </div>
                    </div>
                </div>
                <div className='user_card'>
                    <div className='user_card-name'>
                        <img src={user_img} alt="user image" />
                        <div className='user_name'>
                            <h6>Sven</h6>
                            <p>Германия</p>
                        </div>
                    </div>

                    <div className='user_data-term'>
                        <div className='tern-icon'>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                        </div>
                        <h6>август 2023 г. </h6>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-termm'>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-text'>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C</p>
                        <div className='box1-textt-showMore'>
                            <h6>Показать ещё</h6>
                            <b><GoChevronRight /></b>
                        </div>
                    </div>
                </div>
                <div className='user_card'>
                    <div className='user_card-name'>
                        <img src={user_img} alt="user image" />
                        <div className='user_name'>
                            <h6>Sven</h6>
                            <p>Германия</p>
                        </div>
                    </div>

                    <div className='user_data-term'>
                        <div className='tern-icon'>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                        </div>
                        <h6>август 2023 г. </h6>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-termm'>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-text'>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C</p>
                        <div className='box1-textt-showMore'>
                            <h6>Показать ещё</h6>
                            <b><GoChevronRight /></b>
                        </div>
                    </div>
                </div>
                <div className='user_card'>
                    <div className='user_card-name'>
                        <img src={user_img} alt="user image" />
                        <div className='user_name'>
                            <h6>Sven</h6>
                            <p>Германия</p>
                        </div>
                    </div>

                    <div className='user_data-term'>
                        <div className='tern-icon'>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                            <b> <FaStar /> </b>
                        </div>
                        <h6>август 2023 г. </h6>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-termm'>
                        <p>Срок аренды - Около недели</p>
                    </div>

                    <div className='user_data-text'>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C</p>
                        <div className='box1-textt-showMore'>
                            <h6>Показать ещё</h6>
                            <b><GoChevronRight /></b>
                        </div>
                    </div>
                </div>
                <button>Показать все отзывы(23)</button>
            </div>

            <hr className=' line' />


            <div className='map'>
                <h5>Где вы будете</h5>
                <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className='text'>
                <h5>Остров Gukhdи, Швеция</h5>
                <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...</p>
                <div className='text-showMore'>
                    <h6>Показать ещё</h6>
                    <span><GoChevronRight /></span>
                </div>
            </div>

            <hr className=' line' />


            <div className='single_user'>
                <div className='single_user-about'>
                    <img src={user_img} alt="image user" />
                    <div>
                        <h5>Sven</h5>
                        <p>Вступление в сообщество: февраль 2023 г</p>
                    </div>
                </div>


                <div className='single_user-text'>
                    <div className='single_user-text-left'>
                        <div className='single_user-icons'>
                            <div className='single_user-icon'>
                                <b> <FaStar /> </b>
                                <p>24 отзыва</p>
                            </div>
                            <div className='single_user-icon'>
                                <b> <FaStar /> </b>
                                <p>Личность потверждения</p>
                            </div>
                        </div>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate libero et v   <b> Подробно...  </b>
                        </p>
                    </div>
                    <div className='single_user-text-right'>
                        <div className='user_text-right-text'>
                            <p>Языки: <b>Русский, Узбекиский, Англиский</b></p>
                            <p>Быстрота ответов: <b>100%</b></p>
                            <p>Время ответа: <b>2 часа</b></p>
                        </div>
                        <button>Связаться с хозяином</button>
                    </div>
                </div>

                <hr className=' line' />

                <div className='single_user-rules-information'>
                    <h6>Важная информация</h6>
                    <div className='single_user-ruleses'>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=' line' />

                <div className='single_user-rules-information2'>
                    <h6>Важная информация</h6>
                    <div className='single_user-ruleses'>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                        <div className='single_user-rules'>
                            <p>Правила дома: 14:00</p>
                            <p>Правила дома до 12:00</p>
                            <p>Максимум 3 гостя</p>
                            <div className='user_rules-showMore'>
                                <h5>Показать ещё</h5>
                                <span className='user_rules-span'><GoChevronRight /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Single_Card