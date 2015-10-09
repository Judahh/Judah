<?php
//    include ('../../../../../../Languages/MultilingualText.php');
    include ('../../../../../../Languages/CheckLanguage.php');
?>

<div id="DivIdCode">
    <div id="DivIdOtherStuff">
        <div id="DivIdProjectTitle">
            <div id="DivIdSomeOpacity">
                <div id="DivIdMenuItem">
                    <div id="DivIdBasicIcon">
                        <div id="DivIdFontBig2" style="color: #ffffff"><</div>
                    </div>
                </div>
            </div>
            <div id="DivIdTextBasic">
                <div id="DivIdTitleTextSize">
                    <div id="DivIdTextHome" style="color: #ffffff">
                        HUTCHDELIVERY
                    </div>
                </div>
                <div id="DivIdTitleTextSize">
                    <div id="DivIdTextName" itemprp=""  style="color: #ffffff">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "slogan");
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">
            <div id="DivFullBlock">
                <div id="DivTextHome2">
                    <div id="DivIdTextBasic">
                        <div id="DivIdTitleTextSize">
                            <div id="DivIdTextName" itemprp=""  style="color: #ffffff">
                                <div id="DivIdOrderNow">
                                    <?php
                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "orderNow");
                                    ?>
                                </div>
                            </div>
                        </div>
                        <div id="DivFullBlock">
                            <div id="DivIdTextJustified" style="color: #ffffff">
                                <?php
                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Goods", "establishment");
                                ?>
                            </div>
                            <div id="DivIdSomeOpacity">
                                <div id="DivIdRestaurantForm">
                                    <form id="FormIdRestaurant" name="RestaurantForm"> <!--action="form.html"!-->
                                        <div>
                                            <input id="InputIdRestaurantName" name="RestaurantName" type="text" placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Goods", "establishmentName");
                                            ?>" />
                                        </div>
                                        <div>
                                            <textarea id="TextAreaIdTraditionalOrder" name="TraditionalOrder" placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "order");
                                            ?>"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="DivFullBlock">
                            <div id="DivIdTextJustified" style="color: #ffffff">
                                <?php
                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "location");
                                ?>
                            </div>
                            <div id="DivIdSomeOpacity">
                                <div id="DivIdLocationForm">
                                    <form id="FormIdLocation" name="LocationForm"> <!--action="form.html"!-->
                                        <div class="DivClassComboBoxEditable" autocomplete='off'>
                                            <input id="InputIdLocationName" name="LocationName" type="text" autocomplete='off' placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "locationName");
                                            ?>" />
                                            <div class="DivClassDropDownList">
                                                <a><?php echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "currentLocation");?></a>
                                                <a>Ex1</a>
                                                <a>Ex2</a>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea id="TextAreaIdMainLocationAddress" name="MainLocationAddress" class="ClassMainLocationAddressValidator" placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "mainLocationAddress");
                                            ?>"></textarea>
                                        </div>
                                        <div>
                                            <input id="InputIdComplementaryLocationAddress" name="ComplementaryLocationAddress" type="text" placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "complementaryLocationAddress");
                                            ?>"/>
                                        </div>
                                        <div>
                                            <textarea id="TextAreaIdHintLocationAddress" name="HintLocationAddress" placeholder="<?php
                                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "hintLocationAddress");
                                            ?>"></textarea>
                                        </div>
                                        <div>
                                            <button id="ButtonIdSaveLocation" name="SaveLocation">
                                                <?php
                                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "save");
                                                ?>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div id="DivIdMapCanvas"></div>
                            </div>
                        </div>
                        <div id="DivFullBlock">
                            <div id="DivIdTextJustified" style="color: #ffffff">
                                <?php
                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "paymentOption");
                                ?>
                            </div>
                            <div id="DivIdSomeOpacity">
                                <div id="DivIdPaymentForm">
                                    <form id="FormIdPayment" name="PaymentForm"> <!--action="form.html"!-->
                                        <div>
                                            <label>
                                                <select id="SelectIdPaymentType" name="PaymentType">
                                                    <option class="OptionPaymentType" id="OptionIdPaymentType">
                                                        <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Home", "cash");
                                                        ?>
                                                    </option>
                                                    <option class="OptionPaymentType" id="OptionIdPaymentType">
                                                        <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Home", "creditCard");
                                                        ?>
                                                    </option>
                                                    <option class="OptionPaymentType" id="OptionIdPaymentType">
                                                        <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Home", "payPal");
                                                        ?>
                                                    </option>
                                                </select>
                                            </label>
                                        </div>
                                        <div>
                                            <button id="ButtonIdSendOrder" name="SendOrder">
                                                <?php
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "Home", "send");
                                                ?>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>